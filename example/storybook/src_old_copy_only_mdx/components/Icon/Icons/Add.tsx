import { createIcon } from '@universa11y/icon';
import { Root } from '../styled-component';

export const AddIcon = createIcon({
  Root,
  viewBox: '0 0 24 24',
  d: 'M13.25 10.75V2H10.75V10.75H2V13.25H10.75V22H13.25V13.25H22V10.75H13.25Z',
}) as any;

export default AddIcon;

// console.log(AddIcon, 'add icon here');