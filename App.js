
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder={'course Goals'}/>
                <Button title={'add Goals'}/>
            </View>
            <View style={styles.goalsContainer}>
                <Text>List of Goals</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
        appContainer: {
            flex: 1,
            paddingTop: 50,
            paddingHorizontal: 16,
        },

        inputContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
            borderBottomWidth: 1,
            borderBottomColor: 'pink',
        },

        textInput: {
            borderWidth: 1,
            borderColor: '#cccccc',
            width: '70%',
            marginRight: 8,
            padding: 8,
        },
    goalsContainer: {
            flex: 5,
    }
    }
);
