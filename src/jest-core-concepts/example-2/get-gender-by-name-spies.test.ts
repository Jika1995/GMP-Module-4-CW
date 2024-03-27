import axios from "axios";
import getGenderByName from "./get-gender-by-name";

const GENDER_JOHN = {
  name: 'John',
  gender: 'male',
  probability: 0.999,
  count: 1
};

describe('[Spies] Get gender by name', () => {
  test('should return gender', async () => {
    //mock response from API

    jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({ data: GENDER_JOHN }));

    const genderResponse = await getGenderByName(GENDER_JOHN.name);

    expect(genderResponse).toEqual(GENDER_JOHN);
  });

  afterEach(() => {
    jest.clearAllMocks();
  })
})