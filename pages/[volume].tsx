import React from "react";
import { Volume, Book } from "../utils/types";
import {
  getVolume,
  GetVolumeData,
  GetVolumeVariables
} from "../graphql/queries";
import client from "../graphql/client";
import { NextPage } from "next";
import bySortPosition from "../utils/bySortPosition";
import Directory from "../components/Directory";

type Props = {
  volume?: Volume;
  books?: Array<Book>;
};

const VolumePage: NextPage<Props> = ({ volume, books }) => {
  if (!volume || !books) {
    return <>error 404</>;
  }
  return (
    <Directory
      entries={books.sort(bySortPosition).map(book => ({
        id: book.id,
        href: `/${volume.title.replace(/\s/g, ".")}/${book.title.replace(
          /\s/g,
          "."
        )}`,
        title: book.title
      }))}
    />
  );
};

VolumePage.getInitialProps = async ({
  query: { volume: volumeRef },
  res
}): Promise<Props> => {
  const title = (volumeRef as string).replace(/\./g, " ");
  const result = await client.query<GetVolumeData, GetVolumeVariables>({
    query: getVolume,
    variables: {
      title
    }
  });

  const volumeData = result.data.volume;

  if (volumeData == null) {
    if (res) {
      res.writeHead(404);
    }
    return {};
  }

  const { books, ...volume } = volumeData;

  return {
    volume: volume as Volume,
    books
  };
};

export default VolumePage;
