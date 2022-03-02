import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, TextInput, SafeAreaView,Button} from 'react-native';
import { useState } from 'react';

export default function App() {
	const [password, setPassword] = useState('');

	const signIn = () => {                         
		if (password.length < 6) {
			return false;
		}
	}
	return (
		<SafeAreaView style={styles.container}>
				<Image  source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }}
				style={{ width: 300, height: 100, marginBottom: 100 }} />
				<TextInput
					style={{ borderWidth: 1, width: 200, padding: 8, borderRadius: 5, borderColor: "lightgrey"}}
					placeholder="Login"
				/>
				<TextInput
					style={{ borderWidth: 1, width: 200, padding: 8, borderRadius: 8, borderColor: "lightgrey", marginTop: 10}}
					placeholder="Password"
					secureTextEntry={true}
					onChangeText={(password) => setPassword(password)}
					
				/>
				<Button onPress={() => signIn()} title='Submit'/>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
