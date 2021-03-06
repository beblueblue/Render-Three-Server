import * as Designer from './action-type';

// 初始化sku中设计面配置，保存到redux
export const getConfig = (faceConfigList) => {
    return {
        type: Designer.GETCONFIG,
        faceConfigList
    }
}

// 更改选中面ID
export const selectImgId = (selectedImgId) => {
   return {
        type: Designer.SETIMGID,
        selectedImgId
    }
}
// export const selectImgId = (selectedImgId) => (dispatch, getState) => {
//     const { changeUV } = getState();

//     if (selectedImgId !== changeUV.selectedImgId) {
//         dispatch({
//             type: Designer.SETIMGID,
//             selectedImgId
//         });
//     }
// }

// 更新纹理图
export const updateUV = (UVMap) => (dispatch, getState) => {
    const { changeUV } = getState();

    if (UVMap !== changeUV.UVMap) {
        dispatch({
            type: Designer.UPDATEUV,
            UVMap
        });
    }
}

// 切换显示UV映射关系图
export const toggleUVBackground = (showUVBackground) => {
    return {
        type: Designer.TOGGLEUVBG,
        showUVBackground
    }
}