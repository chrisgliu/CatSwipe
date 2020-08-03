import * as React from 'react';
import { Swipeable, direction } from 'react-deck-swiper';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import CardButtons from './CardButtons';
import Card from './Card';
import useStyles from './styles';


function App(CardData) {
  const INITIAL_CARDS_STATE = CardData;
  const classes = useStyles();

  const [lastSwipeDirection, setLastSwipeDirection] = React.useState(null);
  const [cards, setCards] = React.useState(INITIAL_CARDS_STATE);

  const handleOnSwipe = (swipeDirection) => {
    if (swipeDirection === direction.RIGHT) {
      setLastSwipeDirection('right');
    }

    if (swipeDirection === direction.LEFT) {
      setLastSwipeDirection('left');
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
                    {'Looks like you have just swiped to '}
                    {lastSwipeDirection}
                    ? 🔮
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

export default App;
