import { Pagination, Flex, Divider } from "antd";
import { useState } from "react";
import { Heading } from "@chakra-ui/react";
import {
  FacebookFilled,
  GithubFilled,
  LinkedinFilled,
} from "@ant-design/icons";

export default function Page() {
  const [page, setPage] = useState<number>(1); // Page number as a number, not string

  return (
    <>
      <Flex justify="center" className="h-50">
        <Pagination
          className="justify-center "
          current={page} // Current page number
          onChange={setPage} // Update the page state on change
          total={50} // Total number of items (you might want to adjust this)
        />
      </Flex>

      <Divider orientation="center" className="m-50" />

      <Flex gap={"large"} justify="center">
        <Heading>Look at our social medias</Heading>
        <FacebookFilled />
        <GithubFilled />
        <LinkedinFilled />
      </Flex>
    </>
  );
}
