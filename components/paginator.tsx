import {
  Pagination,
  PaginationContainer,
  PaginationNext,
  PaginationPage,
  PaginationPageGroup,
  PaginationPrevious,
  PaginationSeparator,
  usePagination,
} from '@ajna/pagination';
import { useColorModeValue } from '@chakra-ui/react';
import { PAGE_SIZE } from 'components/contract-search/table';
import { FC, useEffect, useMemo } from 'react';

export function useFixedPagination<T>(
  items: T[],
  pageSize: number = PAGE_SIZE
): [ReturnType<typeof usePagination>, T[]] {
  const pagination = usePagination({
    total: items.length,
    initialState: { currentPage: 1, pageSize },
    limits: {
      inner: 2,
      outer: 2,
    },
  });
  const { currentPage, setCurrentPage } = pagination;
  const selection = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return items.slice(start, pageSize + start);
  }, [items, currentPage, pageSize]);
  useEffect(() => {
    setCurrentPage(1);
  }, [items, setCurrentPage]);
  return [pagination, selection];
}

interface PaginatorProps {
  pagesCount: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  isDisabled?: boolean;
  pages: number[];
}
export const Paginator: FC<PaginatorProps> = ({
  pagesCount,
  currentPage,
  setCurrentPage,
  isDisabled,
  pages,
}) => {
  const pageBgColor = useColorModeValue('white', 'gray.700');
  const selectedPageBgColor = useColorModeValue('gray.200', 'gray.600');
  return (
    <Pagination
      pagesCount={pagesCount}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      isDisabled={isDisabled}
    >
      <PaginationContainer justify="space-between" w="full">
        <PaginationPrevious
          backgroundColor={pageBgColor}
          _disabled={{
            backgroundColor: selectedPageBgColor,
            pointerEvents: 'none',
          }}
          _hover={{ backgroundColor: selectedPageBgColor }}
        >
          Previous
        </PaginationPrevious>
        <PaginationPageGroup isInline separator={<PaginationSeparator />}>
          {pages.map((page: number) => (
            <PaginationPage
              key={`pagination_page_${page}`}
              px={2}
              page={page}
              backgroundColor={pageBgColor}
              _current={{ backgroundColor: selectedPageBgColor }}
              _hover={{ backgroundColor: selectedPageBgColor }}
            />
          ))}
        </PaginationPageGroup>
        <PaginationNext
          backgroundColor={pageBgColor}
          _disabled={{
            backgroundColor: selectedPageBgColor,
            pointerEvents: 'none',
          }}
          _hover={{ backgroundColor: selectedPageBgColor }}
        >
          Next
        </PaginationNext>
      </PaginationContainer>
    </Pagination>
  );
};
