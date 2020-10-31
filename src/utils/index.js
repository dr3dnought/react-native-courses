
export const getTextAlignFromProps = (textAlign) => {
    if(textAlign === 'right' || textAlign === 'left' || textAlign === 'center' || textAlign === 'justify' || textAlign === 'auto') {
        return textAlign;
    }

    return 'center';
};

export const getAlignContentFromProps = (alignContent) => {
    if(alignContent === 'center' || alignContent === 'flex-start' || alignContent === 'flex-end') {
        return alignContent;
    }

    return 'center'
};
