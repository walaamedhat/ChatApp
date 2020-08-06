import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);
    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();

                // Load fonts
                await Font.loadAsync({
                    ...Ionicons.font,
                    // 'Montserrat-Black': require('../../assets/fonts/Montserrat-Black.ttf'),
                    // 'Montserrat-SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
                    // 'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
                    // 'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf'),
                    // 'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
                    // 'Montserrat-Light': require('../../assets/fonts/Montserrat-Light.ttf'),
                    // 'Montserrat-ExtraBold': require('../../assets/fonts/Montserrat-ExtraBold.ttf'),
                });
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
}
