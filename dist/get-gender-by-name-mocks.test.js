"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const get_gender_by_name_1 = __importDefault(require("./get-gender-by-name"));
const GENDER_JOHN = {
    name: 'John',
    gender: 'male',
    probability: 0.999,
    count: 1
};
jest.mock('axios'); //mock axios module, pay attention name is passed as string
const mockedAxios = axios_1.default;
//some magic around types
describe('[Mocks] Get gender by name', () => {
    test('should return gender', () => __awaiter(void 0, void 0, void 0, function* () {
        //mock resonse from API
        mockedAxios.get.mockResolvedValue({ data: GENDER_JOHN });
        const genderResponse = yield (0, get_gender_by_name_1.default)(GENDER_JOHN.name);
        //expect that getGenderByName() func returns what API returns;
        expect(genderResponse).toEqual(GENDER_JOHN);
    }));
    afterEach(() => {
        //clear all Mocks to be sure that they won't be passed to any tests of this file
        jest.clearAllMocks();
    });
});
//# sourceMappingURL=get-gender-by-name-mocks.test.js.map