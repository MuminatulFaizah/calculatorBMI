import React, {Component} from 'react';
import {Text, View, Button, TextInput, TouchableHighlight} from 'react-native';

export default class App extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
            height:0,
            weight:0,
            bmi:0
        }
    }

    prosesSubmit(height, weight){
        let hasil = weight / ((height/100) * (height/100));
        this.setState({
            bmi: hasil
        })
    }
    
    render(){
        return(
            <View style = {{flex:1, flexDirection: 'column'}}>
                <View style = {{flex:1, flexDirection: 'row'}}>
                    <View style = {{flex:1, flexDirection: 'column'}}>
                        <TouchableHighlight>
                            <Image
                                style={{width: 50, height: 50}}
                                source={require('./pria.png')}
                            />
                            <Text style={{textAlign:'center',fontSize:15 }}>Male</Text>
                            <Image
                                style={{width: 50, height: 50}}
                                source={require('./wanita.jpeg')}
                            />
                            <Text style={{textAlign:'center',fontSize:15 }}>Female</Text>
                        </TouchableHighlight>
                
                    </View>

                    <View style = {{flex:1, flexDirection: 'column', padding:25}}>
                        <TextInput
                            style={{fontSize:100, textAlign: 'center', }}
                            placeholder = "0"
                            onChangeText={(height)=>this.state({height})}
                        />
                        <Text style = {{textAlign: 'center', fontSize:50}}>Height (in cm)</Text>

                    </View>

                    <View style = {{flex:1, flexDirection: 'column', padding:25}}>
                        <TextInput
                            style={{fontSize:100, textAlign: 'center', }}
                            placeholder="0"
                            onChangeText={(weight)=>this.state({weight})}
                        />
                        <Text style = {{textAlign: 'center', fontSize:50}}>Weight (in kgs)</Text>
                    </View>
                </View>

                <View style= {{flex:1, flexDirection: 'column', justpadding:25}}>
                    <Button
                        onPress={()=>this.prosesSubmit(this.state.bmi)}
                        title = "Submit"
                        color = "grey"
                    /> 
                </View>       
            </View>
        )
    }
}
