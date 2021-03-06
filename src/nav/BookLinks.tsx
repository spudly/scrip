import React, {FC, useCallback} from 'react';
import {BiBook} from '@meronex/icons/bi';
import {useQuery} from 'react-query';
import scriptureLinkHref from '../utils/scriptureLinkHref';
import {getAllBooksByVolumeId} from '../api/api.client';
import {VolumeRecord} from '../types';
import SideNavLinkBranch from './SideNavLinkBranch';
import ChapterLinks from './ChapterLinks';

const BookLinks: FC<{
  volume: VolumeRecord;
  bookTitle?: string;
  closeSideNav: () => void;
}> = ({volume, bookTitle, closeSideNav}) => {
  const {data: {items: books = undefined} = {}} = useQuery(
    ['books', volume.id],
    () => getAllBooksByVolumeId(volume.id),
    {enabled: volume != null},
  );

  return (
    <>
      {books?.map(book => (
        <SideNavLinkBranch
          key={book.id}
          isOpen={book.title === bookTitle}
          href={scriptureLinkHref(volume.title, book.title)}
          icon={<BiBook />}
          label={book.title}
          level={2}
        >
          {book.title === bookTitle && (
            <ChapterLinks
              volume={volume}
              book={book}
              closeSideNav={closeSideNav}
            />
          )}
        </SideNavLinkBranch>
      ))}
    </>
  );
};

export default BookLinks;
