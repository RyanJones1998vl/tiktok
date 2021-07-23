import React from 'react';
import { FlatList, Image, View, Text, StyleSheet, TouchableHighlight, TouchableHighlightBase, Pressable } from 'react-native';
import  {DiscoverScreenStyles, 
        DiscoveryScreenIcons} 
        from '../../resources/constant'

import {AutoScrollFlatList} from 'react-native-autoscroll-flatlist'
import {SizedImage} from '../main/index'

class SearchHistory extends React.Component{
    constructor(props){
        super(props)
        this.state={
            history : [
                {name: "zoandmatt1", ticked:true},
                {name: "zoandmatt2", ticked:false},
                {name: "zoandmatt0", ticked:true},
                {name: "new friend", ticked:true},
                {name: "new friend", ticked:false},
                {name: "new friend", ticked:false},
                {name: "new friend", ticked:true},
                {name: "new friend", ticked:false},
                {name: "new friend", ticked:true},
            ]
        };
    }
    removeHistoryItem = s => {
        // console.log(this.state.history)
        var newHistory = this.state.history.splice(s, 1)
        this.setState({
            history: newHistory
        })
         //console.log(this.state.history)
    }
    removeAllHistoryItems = () => {
        this.setState({
            history:[]
        })
    }
    historyItem = (s) => {
        // console.log("historyItem")
        // console.log(this.state.history)
        return (
            
            <View>
                <Pressable 
                    style={DiscoverScreenStyles.historyItem}
                    onPress = {() =>  this.props.pickOption(s.item.name)}>
                    <SizedImage
                        source={DiscoveryScreenIcons.clock}
                        style={DiscoverScreenStyles.clockIcon}/>
                    <View style={DiscoverScreenStyles.rightHistoryItemPart}>
                        <View style={{flexDirection:"row"}}>
                            <Text style = {DiscoverScreenStyles.historyItemText}>{s.item.name} </Text>
                            {
                            s.item.ticked && 
                            <Image
                                style={DiscoverScreenStyles.tickIcon}
                                source={DiscoveryScreenIcons.tick}/>
                            }
                        </View>
                        
                        <TouchableHighlight
                            onPress = {() => this.removeHistoryItem(s.index)}>
                            <Image 
                                style = {DiscoverScreenStyles.deletingIcon}
                                source={DiscoveryScreenIcons.x}/>
                        </TouchableHighlight>
                    </View>
                </Pressable>
            </View>
        )
    }
    render(){
        return(
            <View style={DiscoverScreenStyles.historyView}>
                <View style={DiscoverScreenStyles.historyHeader}>
                    <Text style={DiscoverScreenStyles.headerTitle}>Recent searches</Text>
                    <TouchableHighlight
                        onPress = {() => this.removeAllHistoryItems()}>
                        <Text style={DiscoverScreenStyles.clearAllText}>Clear all</Text>
                    </TouchableHighlight>
                </View>
                <FlatList
                    data = {this.state.history}
                    extraData={this.state.history}
                    renderItem = {i => this.historyItem({index:i.index, item:i.item})}/>
            </View>
        )
    }
    
}
export class SearchResults extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state={
            storedResult : [
                {name:"zoandmatt2", saved: false, ticked:true, avatar: DiscoveryScreenIcons.avatar},
                {name:"zoandmatt0", saved: true, ticked:true, avatar: DiscoveryScreenIcons.avatar},
                {name:"zoandmatt1", saved: true, ticked:false, avatar: DiscoveryScreenIcons.avatar},
                {name:"new friend", saved: true, ticked:true, avatar: DiscoveryScreenIcons.avatar},
            ],
            results:[]
        };
    }
    resultItem = (s) => {
        // console.log("historyItem")
        console.log(this.state.results)
        return (
            <Pressable 
                style={DiscoverScreenStyles.resultItem}
                onPress = {() => this.props.pickOption(s.item.name)}>
                <SizedImage
                    source={!s.item.saved?DiscoveryScreenIcons.clock: DiscoveryScreenIcons.search}
                    style={DiscoverScreenStyles.clockIcon}/>
                <View style={DiscoverScreenStyles.rightResultItemPart}>
                    <View style={{flexDirection:"row"}}>
                        <Text style = {DiscoverScreenStyles.historyItemText}>{s.item.name} </Text>
                        {
                        s.item.ticked && 
                        <Image
                            style={DiscoverScreenStyles.tickIcon}
                            source={DiscoveryScreenIcons.tick}/>
                        }
                    </View>
                    
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <SizedImage 
                            style={DiscoverScreenStyles.resultAvatar}
                            source={s.item.avatar}/>
                        <TouchableHighlight
                            onPress = {() => this.props.pushUpName(s.item.name)}>
                            <Image 
                                style = {DiscoverScreenStyles.pointingUpArrow}
                                source= {DiscoveryScreenIcons.pointingUpArrow}/>
                        </TouchableHighlight>
                    </View>
                </View>
            </Pressable>
        )
    }
    static getDerivedStateFromProps = (n, p) =>{
        if(n.input != p.searchedString){
            return ({ 
                searchedString: n.input,
                results: p.storedResult.filter(r => String(r.name).includes(String(n.input)))
            }) 
        }
        // console.log(this.state.searchedString)

    }
    render(){
        return(
            <View style={DiscoverScreenStyles.historyView}>
                <FlatList
                    data = {this.state.results}
                    extraData={this.state.history}
                    renderItem = {i => this.resultItem({index:i.index, item:i.item})}/>
            </View>
        )
    }
    
}
export default SearchHistory;