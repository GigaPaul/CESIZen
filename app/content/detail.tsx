import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput,
  SafeAreaView, 
  StatusBar,
  TouchableOpacity,
  Button,
} from 'react-native';
import { styles } from '../../scripts/style.js'
import { ScrollView } from 'react-native';


export default function ContentScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

        <ScrollView>
            {/* Main Content Area */}
            <View style={[styles.content, styles.content_content]}>
                <View>
                    <View style={styles.content__header}>
                        <Text style={styles.h1}>Page de contenu</Text>
                        <Text style={styles.muted}>Sous-titre explicatif</Text>
                    </View>

                    <View>
                        <Text style={styles.h2}>Lorem ipsum dolor sit amet</Text>
                        <Text style={styles.content__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur velit vel massa finibus rhoncus. Duis nisi metus, ornare egestas cursus et, commodo quis augue. Vivamus tincidunt leo tempor lacus bibendum, at feugiat turpis malesuada. Aliquam erat volutpat. Phasellus eu ex mattis, suscipit nisi rhoncus, blandit mauris. Morbi ullamcorper mi quis nisi viverra bibendum. Proin eleifend diam ut dolor efficitur, vel imperdiet orci volutpat. In id tincidunt velit. Sed non maximus neque.</Text>
                        <Text style={styles.content__text}>Donec faucibus, justo at consectetur hendrerit, enim enim euismod quam, eget eleifend tortor est at enim. Duis at condimentum eros. Cras porta orci non orci accumsan egestas. Aliquam finibus placerat diam, non fringilla libero eleifend ut. Vestibulum bibendum placerat ultrices. Nunc a sem condimentum eros aliquam pellentesque porta vitae nisi. Maecenas nec feugiat justo. Vivamus varius at nibh ut cursus. Nam scelerisque, eros a tempus vestibulum, est diam cursus lorem, ac molestie elit nulla nec mi. Aliquam erat volutpat. Phasellus non ligula quis metus tristique vestibulum. Sed in nunc scelerisque neque placerat pulvinar nec sed sem.</Text>
                        <Text style={styles.h2}>Phasellus cursus condimentum sodales</Text>
                        <Text style={styles.content__text}>Phasellus cursus condimentum sodales. Cras eget mauris posuere, malesuada ex ac, ullamcorper lacus. Fusce blandit arcu ante. Suspendisse eu orci eget velit euismod volutpat. Donec eget rhoncus sapien. Proin augue arcu, laoreet vitae tincidunt eget, imperdiet ac enim. Nunc ipsum ligula, suscipit eleifend quam ac, scelerisque gravida ante. Vivamus elementum accumsan nulla, ut ultrices nisi egestas id. Proin tempus sem id neque luctus faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc pretium hendrerit orci, at ultricies sem tincidunt vitae.</Text>
                        <Text style={styles.content__text}>Etiam porttitor magna eget massa consectetur, eu sollicitudin nunc lacinia. Cras dignissim hendrerit orci et lobortis. Nunc euismod facilisis massa, ut vulputate elit ultricies et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque tincidunt in nunc at lacinia. Maecenas viverra est in fringilla accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                        <Text style={styles.content__text}>Phasellus diam purus, fringilla in neque in, venenatis interdum mauris. Phasellus mattis placerat libero nec congue. Morbi viverra risus ut massa varius, iaculis semper mi molestie. Fusce ut lectus mauris. Quisque vitae libero neque. Vestibulum faucibus vehicula mi ac efficitur. Morbi molestie interdum quam ut volutpat. Curabitur ipsum ligula, elementum sed ipsum eget, laoreet varius nisi. Aenean ullamcorper ligula id quam cursus commodo. Nam dapibus ligula id mattis lacinia. Sed viverra ut mauris vel posuere. Aliquam ac nulla non ante varius pretium a non justo. Proin aliquam ut tellus nec tristique. Nunc pulvinar risus sit amet metus blandit, egestas suscipit urna dictum.</Text>
                    </View>
                </View>
            </View>            
        </ScrollView>

      

    </SafeAreaView>

  );
}