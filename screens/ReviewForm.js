import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';


const ReviewForm = ({ addReview }) => {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{
                    title: '',
                    body: '',
                    rating: ''
                }}
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
                        />

                        <TextInput 
                            style={globalStyles.input}
                            placeholder="리뷰 내용"
                            multiline
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />
                        <TextInput 
                            style={globalStyles.input}
                            placeholder="내 마음대로 평점(1-5)"
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType="numeric"
                        />

                        <Button title="submit" color="maroon" onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default ReviewForm
