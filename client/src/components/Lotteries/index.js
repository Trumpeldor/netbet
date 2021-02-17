import React, { useState } from 'react';
import { connect } from 'react-redux';
import Lottery from './Lottery';
import Utils from '../../utils/Utils';
import ItemsCarousel from 'react-items-carousel';
import './index.css';

function Lotteries({ lotteries }) {
	const [activeItemIndex, setActiveItemIndex] = useState(0);
  if (activeItemIndex > 0 && !Utils.isLongerArray(lotteries, 0)) {
    setActiveItemIndex(0);
  }
  const now = new Date().getTime();
  return (
    <div className="ads">
      <ItemsCarousel
        numberOfCards={4}
        gutter={12}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}
        chevronWidth={24}
        rightChevron={'>'}
        leftChevron={'<'}
        outsideChevron={false}
      >
      {lotteries.filter(lottery => lottery.closing > now).map((lottery) => {
        return (
          <Lottery lottery={lottery} key={lottery.id} />
        );
      })}
      </ItemsCarousel>
    </div>
  );
}

export default connect(
  state => ({
    lotteries: state.lotteries
  })
)(Lotteries)
