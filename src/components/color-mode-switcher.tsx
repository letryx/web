import {
  IconButton,
  IconButtonProps,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FC } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

export const ColorModeSwitcher: FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${colorMode} mode`}
      {...props}
    />
  );
};
