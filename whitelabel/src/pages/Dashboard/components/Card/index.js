import React from 'react';

import {CardContainer} from '~/styles/general';

import {CardNotification} from './styles';
const Card = ({direction, notify, children}) => (
  <CardContainer
    style={{
      flexDirection: direction || 'column',
      // borderWidth: 1,
      // borderColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginTop: 15,
      marginBottom: 0,
      marginLeft: 16,
      marginRight: 16,
      paddingVertical: 16,
      paddingHorizontal: 5,
      shadowColor: 'rgba(194, 194, 194, 0.3);',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
    }}>
    {notify && <CardNotification />}
    {children}
  </CardContainer>
);

export default Card;
