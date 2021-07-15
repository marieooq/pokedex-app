import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

//utils
import convertIntoThreeDigit from '../utils/convertIntoThreeDigit';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 150,
  },
  typeList: {
    fontSize: 12,
    padding: '3px 6px',
    color: '#000',
    background: 'rgb(204, 204, 204)',
    borderRadius: 5,
    marginRight: 8,
  },
});

const MediaCard = ({ list }) => {
  const classes = useStyles();

  const generateTypeLabel = (typeArray) => {
    let list;

    if (typeArray) {
      list = typeArray.map((val, index) => {
        return (
          <span className={classes.typeList} key={index}>
            {val}
          </span>
        );
      });
    }

    return list;
  };

  return (
    list !== undefined && (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`${
              process.env.PUBLIC_URL
            }/thumbnails/${convertIntoThreeDigit(list.id)}.png`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              {list.name.english}
            </Typography>

            <div>{generateTypeLabel(list.type)}</div>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  );
};

export default MediaCard;
