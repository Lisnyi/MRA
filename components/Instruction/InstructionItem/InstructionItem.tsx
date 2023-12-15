import { FC, useState } from 'react'
import { View, Image, Text, ImageURISource, useWindowDimensions } from 'react-native'
import { useThemeContext } from '../../../shared'
import { styles } from './InstructionItem.styled'

type Props = {
    image: ImageURISource,
    description: string
}

export const InstructionItem: FC<Props> = ({ image, description }) => {

    const { uri } = Image.resolveAssetSource(image)
    const [aspectRatio, setAspectRatio] = useState<number>(0)
    const [height, setHeight] = useState<number>(0)
    const [width, setWidth] = useState<number>(0)
    const { theme } = useThemeContext()
    const { width: windowWidth } = useWindowDimensions();

    Image.getSize(uri, (width, height) => {
        setAspectRatio(width / height)
        setHeight(height)
        setWidth(width)
    })

    const boxStyle = {
        borderColor: theme.dark
    }

    const textStyle = {
        color: theme.dark
    }

    const imageStyles = {
        aspectRatio,
        height: (width < windowWidth - 60) ? height : undefined,
        maxHeight: height,
        maxWidth: width,
    }

    return (
        <View style={[styles.box, boxStyle]}>
            <Image source={image} style={[styles.image, imageStyles]} resizeMode='contain' />
            <Text style={[styles.description, textStyle]}>
                {description}
            </Text>
        </View>
    )
}
