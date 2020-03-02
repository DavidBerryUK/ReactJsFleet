import { createStyles }                         from '@material-ui/core/styles';
import { makeStyles }                           from '@material-ui/core/styles';
import { Theme }                                from '@material-ui/core/styles';
import LinearProgress                           from '@material-ui/core/LinearProgress';
import React                                    from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

export default function ProgressIndicatorLinearControl() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  );
}