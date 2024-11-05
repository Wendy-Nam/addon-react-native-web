import React from 'react';
import { View, ImageSourcePropType, Image } from 'react-native';
import RoundedBox, {DesignPreset} from '../Frames/RoundedBox';
import StylizedText from '../Utilities/StylizedText';

interface AvatarProps {
  source?: ImageSourcePropType | React.ReactNode | string;
  label?: string;
  size?: number;
  borderSize?: number;
  borderColor?: string;
  bgColor?: string;
}

const AvatarSection: React.FC<AvatarProps> = ({ 
  source, 
  label, 
  size = 48, 
  borderSize = 2, 
  borderColor = 'border-primary',
  bgColor = 'bg-skyblue'
}) => {
  const isImage = (source: any): boolean => {
    if (typeof source === 'number') return true;
    if (typeof source === 'object' && source.uri) return true;
    if (typeof source === 'string' && source.includes('static/media')) return true; // static/media 경로 체크
    return false;
  };  
  const isText = typeof source === 'string';
  return (
    <View className={`justify-center items-center ${label ? 'mt-1' : ''}`}>
      <View 
        className={`
          rounded-full overflow-hidden flex items-center justify-center mx-3
          ${isImage(source) ? '' : `${bgColor} border-${borderSize} ${borderColor}`}
        `}
        style={{ width: size, height: size }}
      >
        {isImage(source) ? (
          <Image source={source} style={{ width: size, height: size }} resizeMode="cover" />
        ) : isText ? (
          <StylizedText type="label3" styleClass="text-black">{source}</StylizedText>
        ) : (
          <View className="flex items-center justify-center" style={{ width: size, height: size }}>
            {source}
          </View>
        )}
      </View>
      {label && <StylizedText styleClass="text-black mt-1" type="label3">{label}</StylizedText>}
    </View>
  );
};

interface ContentProps {
  title?: React.ReactNode;
  content?: React.ReactNode;
  badge?: React.ReactNode;
}

const ContentSection: React.FC<ContentProps> = ({ 
  title, 
  content, 
  badge, 
}) => {
  return (
    <View className="flex-1 pl-4">
      <View className="flex-row items-center justify-between">
        {title && <View className="flex-1">{title}</View>}
        {badge && <View className='ml-3'>{badge}</View>}
      </View>
      <View className="flex-row items-center mt-1">
        {content && <View className="flex-1">{content}</View>}
      </View>
    </View>
  );
};

type Layout = 'simple' | 'detailed' | 'labelled' | 'contentOnly';

interface CardProps {
  layout?: Layout;
  avatar?: ImageSourcePropType | React.ReactNode;
  label?: string;
  title?: React.ReactNode;
  content?: React.ReactNode;
  badge?: React.ReactNode;
  reverse?: boolean;
  preset?: DesignPreset;
  onPress?: ()=> void;
}

const ListCard: React.FC<CardProps> = ({ 
  layout = 'simple',
  avatar, 
  label, 
  title, 
  content, 
  badge,
  reverse = false,
  preset = 'flatcard',
  onPress
}) => {
  return (
    // NOTE : 모바일 크기에 맞춰 임의로 가로폭 조정함
    <View className="mx-2">
      <RoundedBox preset={preset} onPress={onPress}>
        <View className={`${reverse ? 'flex-row-reverse' : 'flex-row'} min-w-80`}>
          {layout !== 'contentOnly' && (
            <AvatarSection 
              source={avatar} 
              label={label} 
              size={48} 
              borderSize={2} 
              borderColor="border-primary" 
              bgColor="bg-skyblue"
            />
          )}

          <ContentSection 
            title={title} 
            content={content} 
            badge={badge} 
          />
        </View>
      </RoundedBox>
    </View>
  );
};

export default ListCard;
