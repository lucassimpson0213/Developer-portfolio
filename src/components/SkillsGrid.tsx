import { Grid, GridItem } from "@chakra-ui/react";
import { Card } from "antd";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";

import { Typography } from "antd";
export function SkillsGrid() {
  return (
    <Grid
      className="justify-items-center align-center ml-80 mt-40 border-red-800 grid-flow-col-dense "
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 2fr)"
      h="10%"
      w="50%"
      gap={1}
      justifyItems="center"
      flexWrap="wrap"
    >
      <GridItem w="100%" h="100">
        <Card cover={<img alt="Example" src={pic4} className="w-20" />}>
          <Typography.Text italic={true}>coding</Typography.Text>
        </Card>
      </GridItem>
      <GridItem mt={40}>
        <Card
          cover={
            <img
              alt="Example"
              src={
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className="w-8"
            />
          }
        />
      </GridItem>

      <GridItem w="100%" h="50">
        <Card cover={<img alt="Example" src={pic3} />}>
          <Typography.Text italic={true}>planet earth</Typography.Text>
        </Card>
      </GridItem>
      <GridItem w="100%" h="10" mt={160}>
        <Card>
          Neque egestas congue quisque egestas diam in arcu cursus euismod.
          Tempor commodo ullamcorper a lacus vestibulum sed. Integer vitae justo
          eget magna fermentum iaculis. Odio pellentesque diam volutpat commodo
          sed egestas. Aenean euismod elementum nisi quis eleifend quam
          adipiscing vitae proin. Neque egestas congue quisque egestas diam in
          arcu curs
        </Card>
      </GridItem>
    </Grid>
  );
}

export default SkillsGrid;
