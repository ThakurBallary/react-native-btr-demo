import { Animated } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../Components/Home';
import BottomSheet from '../Components/BottomSheet';
import CheckBox from '../Components/CheckBox';
import CollapsibleCard from "../Components/CollapsibleCard";
import ColorPicker from '../Components/ColorPicker';
import IconPicker from '../Components/IconPicker';
import ModalInput from '../Components/ModalInput';
import RadioButton from '../Components/RadioButton';
import RadioGroup from '../Components/RadioGroup';
import Separator from '../Components/Separator';
import SnackBar from '../Components/SnackBar';
import Tag from '../Components/Tag';

const transitionConfig = () => ({
    transitionSpec: {
        duration: 300,
        timing: Animated.timing,
        useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps

        const thisSceneIndex = scene.index
        const width = layout.initWidth

        const translateX = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex],
            outputRange: [width, 0],
        })

        return { transform: [{ translateX }] }
    },
})

const RootStack = createStackNavigator(
    {
        Home,
        BottomSheet,
        CheckBox,
        CollapsibleCard,
        ColorPicker,
        IconPicker,
        ModalInput,
        RadioButton,
        RadioGroup,
        Separator,
        SnackBar,
        Tag,
    },
    {
        initialRouteName: 'Home',
        transitionConfig
    }
)

export default createAppContainer(RootStack);