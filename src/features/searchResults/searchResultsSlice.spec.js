import Reducer from './searchResultsSlice';

describe('counter reducer', () => {
    const initialState = {
        data: [],
        isLoading: false,
    };
    it('should handle initial state', () => {
      expect(Reducer(undefined, {})).toEqual({data:[],isLoading:false});
    });

    it('should handle pending', () => {
        expect(Reducer(initialState, {type:'searchResults/fetchData/pending',meta:{arg:'init',requestId:'sU2I7KpusI9JT2PU5i0vR',requestStatus:'pending'}})).toEqual({data:[],isLoading:true});
    });

    /*
    it('should handle increment', () => {
      const actual = counterReducer(initialState, increment());
      expect(actual.value).toEqual(4);
    });
  
    it('should handle decrement', () => {
      const actual = counterReducer(initialState, decrement());
      expect(actual.value).toEqual(2);
    });
  
    it('should handle incrementByAmount', () => {
      const actual = counterReducer(initialState, incrementByAmount(2));
      expect(actual.value).toEqual(5);
    });*/
  });