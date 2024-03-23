import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './style';
import { FontAwesome5 } from '@expo/vector-icons';

export default function BuyButton() {
    return (
        <View style={styles.container}> 
            <TouchableOpacity style={styles.button}>
            <FontAwesome5 style={styles.icon}
                name="music" 
                size={24} 
                color="black" 
            />
                <Text style={styles.buttonText} >Play Album</Text>
            </TouchableOpacity>
        </View>
    );
}