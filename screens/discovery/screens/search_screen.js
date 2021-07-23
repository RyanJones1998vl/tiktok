import React from 'react';
import { FlatList, Image, View, Text,Button, StyleSheet, TouchableHighlight, TouchableHighlightBase, ScrollView, Keyboard, Pressable, TextInput } from 'react-native';

import {DiscoveryViewId} from '../../../resources/constant'
import { Trending } from './Trending';
import SearchingBar from '../searching_bar';
import SearchHistory, { SearchResults } from '../search_history';
export class SearchScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            view:DiscoveryViewId.History,
            input:"",
        }
    } 
    onInputChange = i => {
        // console.log(this.state.input)
        // console.log(i)
        this.setState({
            input:i,
            view:i==""?DiscoveryViewId.History:DiscoveryViewId.SearchResult,
        })
    }
    pushUpName = n => {
        this.setState({
            input:n
        })
    }
    clearInput = () => {
        this.setState({
            input:"",
            view: DiscoveryViewId.SearchResult,

        })
    }
    pickOption = o => {
        this.setState({
            view: DiscoveryViewId.trendList,
            input : o,
        })
    }
    render(){
        return(
            <View style={{backgroundColor:"#FFFFFF"}}>
                <SearchingBar 
                    // view = {this.state.displayMainScreen}
                    switchView = {() => console.log()}
                    goBack = {() =>  this.props.navigation.goBack()}
                    focusInput = {true}
                    onInputChange = {i=>this.onInputChange(i)}
                    input = {this.state.input}
                    canReturn={true}
                    viewId={this.state.view}
                    clearInput = {()=>this.clearInput()}/>
                {
                    this.state.view == DiscoveryViewId.SearchResult ? 
                    <View>
                        <SearchResults
                            input = {this.state.input}
                            pushUpName = {n => this.pushUpName(n)}
                            pickOption = {o => this.pickOption(o)}/>
                    </View>: 

                    this.state.view == DiscoveryViewId.History ?
                    <View>
                        <SearchHistory
                            pickOption = {o => this.pickOption(o)}/>
                    </View>:

                    this.state.view == DiscoveryViewId.trendList ?
                    <View>
                        <Trending 
                        
                            goToGifList = {this.props.navigation.push}
                            option={this.state.input}/>
                    </View>:
                    <View><Text>Nothing</Text></View>
                }
            </View>
        )
    }
}