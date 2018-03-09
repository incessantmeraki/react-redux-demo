import  {itemsFetchErrorReducer, itemsLoadingReducer, itemsReducer} from  './reducers'
import { itemsFetchError, itemsLoading, itemsFetchSuccess, startItemsFetch } from './actions'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const createMockStore = configureMockStore([thunk])

/* -------------------------- Testing Reducers --------------------------*/

test ('should set default state of itemsFetchError', ()=> {
  const state = itemsFetchErrorReducer(undefined, {type:'@init'})
  expect(state).toEqual(false)
})

test('should set itemsFetchError to provided value', ()=>{
  const action1 = {
    type: 'ITEMS_FETCH_ERROR',
    fetchError: true
  }
  const state1 = itemsFetchErrorReducer(false, action1)
  expect(state1).toEqual(true)

  const action2 = {
    type:'ITEMS_FETCH_ERROR',
    fetchError: false
  }
  const state2 = itemsFetchErrorReducer(true, action2)
  expect(state2).toEqual(false)
})

test('should set default state of itemsLoading', ()=>{
  const state = itemsLoadingReducer(undefined, {type:'@init'})
  expect(state).toEqual(false)
})

test('should set itemsLoading to provided value', ()=>{
  const action1 = {
    type: 'ITEMS_LOADING',
    isLoading: true
  }
  const state1 = itemsLoadingReducer(false, action1)
  expect(state1).toEqual(true)

  const action2 = {
    type:'ITEMS_LOADING',
    isLoading: false
  }
  const state2 = itemsLoadingReducer(true, action2)
  expect(state2).toEqual(false)
})

test('should set default state of items', ()=>{
  const state = itemsReducer(undefined, {type:'@init'})
  expect(state).toEqual([])
})

test('should set items to provided value', ()=>{
  const items = ['first', 'second', 'third']
  const action = {
    type: 'ITEMS_FETCH_SUCCESS',
    items: items
  }

  const state = itemsReducer([], action)
  expect(state).toEqual(items)
})

/* -------------------------- Testing Actions --------------------------*/

test('should generate itemsFetchError action object', ()=>{
  const action = itemsFetchError(true)
  expect(action).toEqual({
    type:'ITEMS_FETCH_ERROR',
    fetchError: true
  })
})

test('should generate itemsLoading action object', ()=>{
  const action = itemsLoading(true)
  expect(action).toEqual({
    type:'ITEMS_ARE_LOADING',
    isLoading: true
  })
})

test('should generate itemsFetchSucess action object', ()=>{
  const items = ['one', 'two', 'three']
  const action = itemsFetchSuccess(items)
  expect(action).toEqual({
    type:'ITEMS_FETCH_SUCCESS',
    items: items
  })
})

test('should successfully return data on API call', (done) => {
  const store = createMockStore()
  window.fetch = jest.fn().mockImplementation(()=>{
    return Promise.resolve(
      new window.Response('{"items": [1,2,3]}', {
        status: 200,
        statusText: 'Success',
        headers: {
          'Content-type': 'application/json'
        }
      })
    )
  })

  return store.dispatch(startItemsFetch('http://test.com'))
    .then(() => {
      const expectedActions = store.getActions()
      expect(expectedActions.length).toBe(3)
      
      expect(expectedActions[0]).toEqual({
        type:'ITEMS_ARE_LOADING',
        isLoading: true
      })
      expect(expectedActions[1]).toEqual({
        type:'ITEMS_ARE_LOADING',
        isLoading: false
      })
      expect(expectedActions[2]).toEqual({
        type:'ITEMS_FETCH_SUCCESS',
        items: {
          items: [1,2,3]
        }
      })
      
      done()
    })
})