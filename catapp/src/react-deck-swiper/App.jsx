import React from 'react';
import { Swipeable, direction } from 'react-deck-swiper';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardButtons from './CardButtons';
import Card from './Card';
import { makeStyles } from '@material-ui/core/styles';

class Swiper extends React.Component{
  render(){
    var Cards = this.props.Cards;

    function SwiperHelper() {
      const [lastSwipeDirection, setLastSwipeDirection] = React.useState(null);
      const [cards, setCards] = React.useState(Cards);
      const classes = makeStyles((theme) => ({
        centerContent: {
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          display: 'flex',
        },
        marginTop5: {
          marginTop: theme.spacing(5),
        },
        marginTop2: {
          marginTop: theme.spacing(2),
        },
        marginTop1: {
          marginTop: theme.spacing(1),
        },
      }));
    
      const handleOnSwipe = (swipeDirection) => {
        if (swipeDirection === direction.RIGHT) {
          setLastSwipeDirection('your right');
        }
      
        if (swipeDirection === direction.LEFT) {
          setLastSwipeDirection('your left');
        }
      
        setCards((prev) => prev.slice(1));
      };
      
    
      const renderButtons = ({
        right,
        left,
      }) => (
        <CardButtons
          right={right}
          left={left}
        />
      );
      
      return (
        <Grid container spacing={3} className={classes.centerContent}>
          <Grid item xs={12} className={classNames(classes.marginTop5, classes.centerContent)}>
            <Typography variant="h3">
              React Deck Swiper
            </Typography>
          </Grid>
    
          {
            cards.length > 0 && (
              <Grid item xs={12} className={classNames(classes.marginTop2, classes.centerContent)}>
                {
                  lastSwipeDirection
                    ? (
                      <Typography variant="body1">
                        {lastSwipeDirection}
                      </Typography>
                    )
                    : (
                      <Typography variant="body1">
                        Try swiping the card below!
                      </Typography>
                    )
                }
              </Grid>
            )
          }
    
          <Grid item xs={12} className={classNames(classes.marginTop2, classes.centerContent)}>
            {
              cards.length > 0
                ? (
                  <Swipeable
                    renderButtons={renderButtons}
                    onSwipe={handleOnSwipe}
                  >
                    <Card item={cards[0]} />
                  </Swipeable>
                )
                : (
                  <Typography variant="body1">
                    Looks like you have reached the end here =)
                  </Typography>
                )
            }
          </Grid>
        </Grid>
      );
    };
    return (
      <SwiperHelper/>
    )
  }
}
export default Swiper;