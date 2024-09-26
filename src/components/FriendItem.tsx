import { Avatar, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { primaryColor } from "../Colors.tsx";

type FriendItemProps = {
  name: string
}

const FriendItem: React.FC<FriendItemProps> = ({ name }) => {
  return (
    <Card variant="outlined" style={{ padding: '5px', borderRadius: '10px', margin: '5px' }}>
      <Stack direction={'row'} style={{ height: '100%' }} justifyItems={'center'} justifyContent={'flex-start'}>
        <Avatar sx={{ bgcolor: primaryColor }} aria-label="recipe" style={{ margin: '10px' }}>
          {name.charAt(0)}
        </Avatar>
        <Typography
          style={{ margin: '10px' }}
          justifySelf={'center'}
          fontSize={16}
          fontWeight={'bold'}>
          {name}
        </Typography>
      </Stack>
    </Card>
  );
}

export default FriendItem;