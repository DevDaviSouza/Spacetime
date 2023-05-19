import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground } from 'react-native';
import { styled } from 'nativewind'

import { NativeWindStyleSheet } from "nativewind";
NativeWindStyleSheet.setOutput({
  default: "native",
});

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import {
  BaiJamjuree_700Bold
} from '@expo-google-fonts/bai-jamjuree'

import blurBg from './assets/bgblur.png';
import Stripes from './assets/stripes.svg'
import NLWlogo from './assets/logo.svg'



const StyledStripes = styled(Stripes)

export default function App() {

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  })

  if (!hasLoadedFonts) {
    return null
  }
  return (
    
    <ImageBackground source={blurBg} className="relative items-center outline flex-1 bg-gray-900"
      imageStyle={{ position: 'absolute', left: '-100%' }}>
      
      <View className='justify-center items-center '>
        <NLWlogo />
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}