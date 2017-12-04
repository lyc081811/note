import { APIBase } from './';
export class Manage extends APIBase {
    // 项目管理
    projectManage(params) {
        return this.makeRequest('projects/', params);
    }
}
