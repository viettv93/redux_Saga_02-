import { Text, View } from "react-native"
import React from "react"
import { useSelector } from "react-redux"
const Main = () => {
    const result= useSelector(state=> state.reducer)
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{`Ket qua tra ve ${JSON.stringify(result.user)} `}</Text>
        </View>
    )
}

export default Main