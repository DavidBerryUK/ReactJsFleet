import { makeStyles }                           from '@material-ui/core/styles';

export const classStyleDefinition = makeStyles(theme => ({

  page: {
    padding: theme.spacing(2),
  },

  regionContainer: {
    position: 'relative',
    height: '100vh'
  },

  regionList: {
    width: 200,
    position: "absolute",
    top: 120,
    left: 10,
    bottom: 8,
    paddingRight: 4,
    overflow: "auto"
  },
  
  regionDetail: {
    borderColor: 'blue',
    borderWidth: 1,
    borderStyle: 'solid',
    marginLeft: 220,
    marginTop: 8,
    float: 'left'
  }
}));