import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/FlatButton';

const reviewSchema = yup.object({
    title: yup.string().required("최소 4글자 이상 입력해주세요!").min(4, "최소 4글자 이상 입력해주세요!"),
    body: yup.string().required("최소 8글자 이상 입력해주세요!").min(8, "최소 8글자 이상 입력해주세요!"),
    rating: yup.string().required("평점은 꼭 입력해야해요ㅠㅠ").test('is-num-1-5', '1 ~ 5 사이의 숫자를 입력해주세요', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0; 
    })
})

const ReviewForm = ({ addReview }) => {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{
                    title: '',
                    body: '',
                    rating: ''
                }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder="영화 제목"
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

                        <TextInput 
                            style={globalStyles.input}
                            placeholder="리뷰 내용"
                            multiline
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>

                        <TextInput 
                            style={globalStyles.input}
                            placeholder="내 마음대로 평점(1-5)"
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType="numeric"
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>

                        <FlatButton text="완료" onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default ReviewForm
