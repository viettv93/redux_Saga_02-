import React, { useState ,useEffect} from "react"
import { TextInput, View, Image, TouchableOpacity, Text } from "react-native"
import { useDispatch ,useSelector} from "react-redux"

const Login = ({navigation}) => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')


    // const [test, setTest] = useState('')
    // const [test2, setTest2] = useState('')
    // const [test3, setTest3] = useState('')


    const disPatch= useDispatch()
    const state = useSelector(state=>state.reducer)
    const onPress = () => {
     disPatch({type : 'Login_Action', payload: {email: value1, password: value2}})
     
    }
    useEffect(() => {
        if(state.user){
            navigation.navigate("Main")
        }
        // console.log('TEST')
    })


    // useEffect(() => {
    //     console.log('TEST 2')
    // }, [test, test2])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 20 }}>
            <Image 
                source={require('../image/nen.png')}
                resizeMode="contain" />
            <Image source={require('../image/sally.png')}
                resizeMode="contain" />
            <TextInput
                onChangeText={(value1) => {
                    setValue1(value1)
                }} 
                value={value1}
                placeholder="Email"
                style={{borderWidth: 0.5, width: '95%', marginVertical: 20}} />
            <View style={{ flexDirection: 'row', borderWidth: 0.5, width: '95%', alignItems: 'center', justifyContent:'center' }}>
                <TextInput 
                placeholder="Password"
                    value={value2}
                    onChangeText={(value2) => {
                        setValue2(value2)
                    }}
                    style={{width: '92%'}} /> 
                <Image source={require('../image/hiden.png')} />
            </View>
            <TouchableOpacity onPress={onPress}
                style={{ backgroundColor: '#1E57F1', width: '95%' , height: '5%', alignItems: 'center', justifyContent: 'center', marginVertical: 20}}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: '400' }}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {setTest(Math.random())}}
                style={{ backgroundColor: '#1E57F1', width: '95%' , height: '5%', alignItems: 'center', justifyContent: 'center', marginVertical: 20}}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: '400' }}>TEST</Text>
            </TouchableOpacity>

            {/* <Text>{test}</Text> */}
            <Image source={require('../image/text.png')} resizeMode="contain"/>
        </View>

    )
}

export default Login