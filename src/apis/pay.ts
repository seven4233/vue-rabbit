import myRequest from '@/utils/http'

export function getOrderAPI(id) {
  return myRequest.request({
    url: `/member/order/${id}`,
  })
}
