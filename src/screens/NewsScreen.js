import React from 'react';
import { View, StyleSheet } from 'react-native'
import HeaderStyleTextComponent from '../components/HeaderStyleTextComponent';
import CommonStyleText from '../components/CommonStyleTextComponent';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

const NewsScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderStyleTextComponent text='Мясная легенда'/>
            <CommonStyleText text='«Пельмени «Русские» производятся только из натуральных компонентов, - говорит главный технолог Чайковского мясокомбината Ренат Уразбахтин. - Мы пользуемся фаршем, приготовленным из свинины и говядины. При этом животных тоже выращиваем сами на фермах собственного подсобного хозяйства под названием «Золотой телёнок». Из процесса изготовления пельменей исключаются консерванты и химикаты, таким образом, продукция получается высочайшего качества. Это позволяет нам успешно конкурировать с другими производителями».'/>
        </View>
    )
};

export default NewsScreen;
