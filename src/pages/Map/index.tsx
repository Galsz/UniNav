import React from "react";
import * as S from './styles'
import { UniversityMap } from "../../common/UniversityMap";
import Locates from "../../content/Locates.json"
import Topics from "../../components/Topics";


const Map = () => {
    return (
    <S.UniversityMapContainer>
       <S.Group>
            <Topics
                title={Locates.title}
                topic1={Locates.topic1}
                topic2={Locates.topic2}
                topic3={Locates.topic3}
                topic4={Locates.topic4}
                topic5={Locates.topic5}
                topic6={Locates.topic6}
                topic7={Locates.topic7}
                topic8={Locates.topic8}
                topic9={Locates.topic9}
                topic10={Locates.topic10}
                topic11={Locates.topic11}
                topic12={Locates.topic12}
                topic13={Locates.topic13}
            />
        </S.Group>
        <S.Group>
            <UniversityMap width={'100%'}/>
        </S.Group>
    </S.UniversityMapContainer>
    )
}

export default Map;
