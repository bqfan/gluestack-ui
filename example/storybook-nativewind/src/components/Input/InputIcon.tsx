import React from 'react';

import {
  Input,
  VStack,
  Icon,
  SearchIcon,
  InputIcon,
  InputSlot,
  InputField,
} from '@gluestack-ui/themed';
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';

const InputWithIcon = ({ ...props }: any) => {
  const [value, setValue] = React.useState('');

  return (
    <VStack space="md" w="$full">
      <Input {...props} size="sm">
        <InputField
          onChangeText={(text) => {
            setValue(text);
          }}
          value={value}
          placeholder="Enter Text here"
        />
        <InputSlot pr="$4">
          <InputIcon as={SearchIcon} />
        </InputSlot>
      </Input>

      <Input {...props} size="md">
        <InputField
          onChangeText={(text) => {
            setValue(text);
          }}
          value={value}
          placeholder="Enter Text here"
        />
        <InputSlot pr="$4">
          <InputIcon as={SearchIcon} />
        </InputSlot>
      </Input>

      <Input {...props} size="lg" isDisabled>
        <InputField
          onChangeText={(text) => {
            setValue(text);
          }}
          value={value}
          placeholder="Enter Text here"
        />
        <InputSlot pr="$4">
          <InputIcon as={SearchIcon} />
        </InputSlot>
      </Input>

      <Input {...props} size="xl" isInvalid>
        <InputField
          onChangeText={(text) => {
            setValue(text);
          }}
          value={value}
          placeholder="Enter Text here"
        />
        <InputSlot pr="$4">
          <InputIcon as={SearchIcon} />
        </InputSlot>
      </Input>
    </VStack>
  );
};

InputWithIcon.description =
  'This is an example of Input component with icon. Inputs are used to capture data from users.';

export default InputWithIcon;

export { Input, VStack, Icon, SearchIcon, EyeIcon, EyeOffIcon };
