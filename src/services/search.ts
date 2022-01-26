import constants from "../constants";
import { get } from "../lib/get";
import { Result, ResultsResponse } from "../pages/Results/result.interface";
import { UrlBuilder } from "../lib/UrlBuilder";

export async function search(
  searchKey: string,
  offset: number
): Promise<ResultsResponse> {
  const response: ResultsResponse = {
    totalCount: 0,
    count: 0,
    data: [],
  };

  const url: string = new UrlBuilder()
    .apiKey()
    .path("gifs/search")
    .param("q", searchKey)
    .param("offset", offset)
    .param("limit", constants.DATA_LIMIT)
    .build();

  try {
    const fullResponse: Result = await get(url);
    response.count = 0;
    response.totalCount = 0;
    if (fullResponse.pagination) {
      response.count = fullResponse.pagination.count;
      response.totalCount = fullResponse.pagination.total_count;
    }
    response.data = fullResponse.data;
  } catch (error) {
    console.error(error);
  }

  return response;
}
