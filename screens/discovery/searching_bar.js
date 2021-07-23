import React from 'react';
import { FlatList, Image, View, Text, StyleSheet, TextInput, Touchable, TouchableHighlight, Pressable } from 'react-native';
import  {DiscoverScreenStyles, 
        DiscoveryScreenIcons,
        DiscoveryViewId} 
        from '../../resources/constant'

import {AutoScrollFlatList} from 'react-native-autoscroll-flatlist'
import {SizedImage} from '../main/index'

const SearchingBar =(props)=>{
    console.log(props)
    return(
        
        <View style={DiscoverScreenStyles.searchBar}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Pressable
                    onPress = {() => props.goBack()}>
                    <SizedImage
                        style={DiscoverScreenStyles.leftIcon}
                        source={props.canReturn?DiscoveryScreenIcons.back:DiscoveryScreenIcons.addFriend}/>
                </Pressable>
                <View style={props.canReturn && props.viewId!= DiscoveryViewId.trendList?DiscoverScreenStyles.searchInput:DiscoverScreenStyles.longSearchInput}>
                    <View>
                        
                    </View>
                    <Pressable>
                        <SizedImage 
                            style={DiscoverScreenStyles.searchIcon}
                            source = {DiscoveryScreenIcons.search}/>
                    </Pressable>

                    <TextInput 
                        placeholder="Search content"
                        style={props.canReturn && props.viewId != DiscoveryViewId.trendList 
                            ?DiscoverScreenStyles.trendingSearch:DiscoverScreenStyles.longTrendingSearch}
                        onFocus={() => props.switchView()}
                        onChangeText = {t =>  props.onInputChange(t)}
                        autoFocus = {props.focusInput?props.focusInput:false}
                        value = {props.input}
                        />
                    {
                        props.canReturn && props.input != "" && 
                        // props.viewId != DiscoveryViewId.History &&
                        <Pressable
                            onPress={() => props.clearInput()}>
                            <SizedImage

                                style={props.viewId!=DiscoveryViewId.trendList?
                                     DiscoverScreenStyles.inputDeletion:
                                     DiscoverScreenStyles.inputDeletionLong}
                                    
                                source={DiscoveryScreenIcons.inputDeletion}/>
                        </Pressable>
                        
                    }
                </View>
            </View>
            {
                props.canReturn?
                props.viewId != DiscoveryViewId.trendList?
                <Pressable>
                    <Text style={DiscoverScreenStyles.searchText}>Search</Text>
                </Pressable>:
                <SizedImage 
                source={DiscoveryScreenIcons.sort}
                style={DiscoverScreenStyles.scanIcon}/>:
                <SizedImage 
                source={DiscoveryScreenIcons.scan}
                style={DiscoverScreenStyles.scanIcon}/>
            }
            
        </View>
    )
}
export default SearchingBar;