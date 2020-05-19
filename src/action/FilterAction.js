import actionType from './actionType'

export const FilterType = {
    All:"All",
    Active:"Active",
    Completed:"Completed"
}

// 构建的action---setVisiableFilter
export const setVisiableFilter = (filter) => {
    return {
      type: actionType.Filter,
      filter
    };
  };
  
  