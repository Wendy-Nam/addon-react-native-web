import React from 'react';
import { View, ImageSourcePropType, Image } from 'react-native';
import RoundedBox, { DesignPreset } from '../Frames/RoundedBox';
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
    if (typeof source === 'string' && source.includes('static/media')) return true;
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
    <View className="flex-1 min-w-0"> {/* Added min-w-0 to restrict overflow */}
      <View className="flex-row items-center justify-between">
        {title && <View className="flex-1 min-w-0">{title}</View>} {/* Ensuring title does not overflow */}
        {badge && <View className='ml-3'>{badge}</View>}
      </View>
      <View className="flex-row items-center mt-1">
        {content && <View className="flex-1 min-w-0">{content}</View>} {/* min-w-0 added here as well */}
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
  onPress?: () => void;
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
    <View style={{ flexGrow: 1, flexShrink: 1, minWidth: 0 }}>
      <RoundedBox preset={preset} onPress={onPress}>
        <View className={`${reverse ? 'flex-row-reverse' : 'flex-row'} space-x-4 justify-between`}>
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
