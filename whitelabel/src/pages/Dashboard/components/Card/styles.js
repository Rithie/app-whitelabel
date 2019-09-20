import styled from 'styled-components/native';

export const CardNotification = styled.View(props => ({
  backgroundColor: props.color ? props.color : '#DF1717',
  alignSelf: props.alignSelf ? props.alignSelf : 'center',
  position: 'absolute',
  right: 10,
  top: 10,
  width: 5,
  height: 5,
  borderRadius: 2.5,
}));
