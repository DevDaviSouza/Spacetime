import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';

import { styled } from 'nativewind';

import { NativeWindStyleSheet} from "nativewind";
NativeWindStyleSheet.setOutput({
  default: "native",
});

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import {
  BaiJamjuree_700Bold
} from '@expo-google-fonts/bai-jamjuree';

import blurBg from './assets/bgblur.png';
import stripes from './components/stripes';
import Logo from './components/logo';

const StyledStripes = styled(stripes)

export default function App() {

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  });

  if (!hasLoadedFonts) {
    return null
  };

  return (
    
    <ImageBackground source={blurBg} className="relative items-center justify-center outline flex-1 bg-gray-900 px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}>
        
        <View className='justify-center items-center flex-1 space-y-6 gap-6'>
            <Logo />
            <Text className='text-gray-50 font-title text-3xl leading-tight'>Sua cápsula do tempo</Text>

              <Text className='text-gray-100 leading-relaxed  justify-center items-center font-body text-base text-center'>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</Text>
      
              <TouchableOpacity activeOpacity={0.7} className='bg-green-500 text-black w-64 h-9 rounded-full font-aut text-base font-semibold uppercase items-center justify-center'>Começar a cadastrar
              </TouchableOpacity>
         </View>

         <Text className='text-gray-200 leading-relaxed text-center'>Feito com 💜 no NLW da Rocketseat</Text>
        <StatusBar style="auto" />
    </ImageBackground>
  );
};