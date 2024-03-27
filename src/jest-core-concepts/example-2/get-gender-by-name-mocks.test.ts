import axios from 'axios';
import getGenderByName from "./get-gender-by-name";

const GENDER_JOHN = {
  name: 'John',
  gender: 'male',
  probability: 0.999,
  count: 1
};

jest.mock('axios'); //mock axios module, pay attention name is passed as string

const mockedAxios = axios as jest.Mocked<typeof axios>;
//some magic around types

describe('[Mocks] Get gender by name', () => {
  test('should return gender', async () => {
    //mock resonse from API
    mockedAxios.get.mockResolvedValue({ data: GENDER_JOHN });

    const genderResponse = await getGenderByName(GENDER_JOHN.name);

    //expect that getGenderByName() func returns what API returns;
    expect(genderResponse).toEqual(GENDER_JOHN);
  });

  afterEach(() => {
    //clear all Mocks to be sure that they won't be passed to any tests of this file
    jest.clearAllMocks();
  })
})
