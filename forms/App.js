import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, TextInput, SafeAreaView,Button,Alert, TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function App() {
	const [mail, setMail] = useState('');
	const [password, setPassword] = useState('');

	const handlePassword = (e) => {
		setPassword(e);
		console.warn(password);
	  };

	  const validPassword = (password) => {
		const passwordRegex = /[0-9a-zA-Z]{6,}/;
		if (passwordRegex.test(password)) {
		  return handlePassword(true);
		} else {
		  return handlePassword(false);
		}
	  };

	  const handleMail = (e) => {
		setMail(e);
		console.warn(mail);
	  };
	
	  const validMail = (mail) => {
		const mailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		if (mailRegex.test(mail)) {
		  return handleMail(true);
		} else {
		  return handleMail(false);
		}
	  };
	
	  const handlePress = () => {
		if (!mail&& !password) {
			return Alert.alert("Details are valid!")
		}
	  };

	return (
		<SafeAreaView style={styles.container}>
			<Image  source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }}
			style={{ width: 300, height: 100, marginBottom: 100 }} />
			{mail ? (
				<TextInput
					style={{ borderWidth: 1, width: 200, padding: 8, borderRadius: 5, borderColor: "lightgrey"}}
					placeholder="Email"
					onChangeText={(text) => validMail(text)}
				/>
			) : (
				<TextInput
					style={{ borderWidth: 1, width: 200, padding: 8, borderRadius: 5, borderColor: "lightgrey"}}
					placeholder="Email"
					onChangeText={(text) => validMail(text)}
				/>
			)}
			{password ? (
				<TextInput
					style={{ borderWidth: 1, width: 200, padding: 8, borderRadius: 8, borderColor: "lightgrey", marginTop: 10}}
					placeholder="Password"
					secureTextEntry={true}
					onChangeText={(text) => validPassword(text)}
				/>
			) : (
				<TextInput
				style={{ borderWidth: 1, width: 200, padding: 8, borderRadius: 8, borderColor: "lightgrey", marginTop: 10}}
				placeholder="Password"
				secureTextEntry={true}
				onChangeText={(text) => validPassword(text)}
			/>
			)}
			<TouchableOpacity>
				<Button onPress={handlePress()} title='Submit'/>
			</TouchableOpacity>
			<StatusBar style="auto"/>
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
