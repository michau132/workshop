import React from 'react';
import { AppConsumer } from '../context/AppContext';
import { Typography } from '@material-ui/core';

export default function Dashboard() {
  return (
    <AppConsumer>
      {(props) => {
        return(
          <div>
            <Typography>Welcome in dashboad component, </Typography>
            <Typography>Currently we have {props.users.length} users</Typography>
            <Typography>Are we fetching? -&gt; {props.isFetchingUsers ? 'Yes' : 'No'}</Typography>
            <Typography>Do we have an error? -&gt; {props.error ? 'Yes' : 'No'}</Typography>
          </div>
        );}}
    </AppConsumer>
  );
}
