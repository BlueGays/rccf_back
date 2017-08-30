<%--
  Created by IntelliJ IDEA.
  User: greatland
  Date: 2017/8/30
  Time: 下午2:59
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="../../common/Header.jsp"%>
<%
    Employee employee = (Employee) request.getAttribute("employee");
    if (null == employee){
        employee = new Employee();
    }
%>

<div class="am-g am-margin-top-xl">
    <div class="am-u-sm-12 am-u-md-9 am-u-lg-4 am-u-sm-centered">
        <div class="am-input-group am-input-group-primary am-hide"  >
            <span class="am-input-group-label">用户id</span>
            <input type="text" class="am-form-field whiteback" value="<%=employee.getId()%>"  />
        </div>
        <div class="am-input-group am-input-group-primary">
            <span class="am-input-group-label">员工编号</span>
            <input type="text" class="am-form-field whiteback" value="<%=employee.getCode()==null?"":employee.getCode()%>"/>
        </div>
        <div class="am-input-group am-input-group-primary">
            <span class="am-input-group-label">员工姓名</span>
            <input type="text" class="am-form-field whiteback" value="<%=employee.getName()==null?"":employee.getName()%>"/>
        </div>
        <div class="am-input-group am-input-group-primary">
            <span class="am-input-group-label">性&emsp;&emsp;别</span>
            <select id="sex"  style="width: 100%;font-size: large;margin-top: 7px; border: solid 1px deepskyblue;">
                <option value="0">未知</option>
                <option <%=(employee.getSex()!=null&&1==employee.getSex())?"checked":""%> value="1">男</option>
                <option <%=(employee.getSex()!=null&&2==employee.getSex())?"checked":""%> value="2">女</option>

            </select>
        </div>
        <div class="am-input-group am-input-group-primary">
            <span class="am-input-group-label">年&emsp;&emsp;龄</span>
            <input type="number" class="am-form-field whiteback" value="<%=(employee.getAge()!=null)?""+employee.getAge():""%>"/>
        </div>
        <div class="am-input-group am-input-group-primary">
            <span class="am-input-group-label">联系方式</span>
            <input type="text" class="am-form-field whiteback" value=""/>
        </div>
        <div class="am-input-group am-input-group-primary">
            <span class="am-input-group-label">入职时间</span>
            <input type="date" class="am-form-field whiteback"/>
        </div>
        <div class="am-input-group am-input-group-primary">
            <span class="am-input-group-label">所属部门</span>
            <input type="text" class="am-form-field whiteback" value="" />
        </div>
        <div class="am-input-group am-input-group-primary">
            <span class="am-input-group-label">角&emsp;&emsp;色</span>
            <select  style="width: 100%;font-size: large;margin-top: 7px; border: solid 1px deepskyblue;">
                <option>业务员</option>
                <option>副总监</option>
                <option>总监</option>
            </select>
        </div>
        <div class="am-input-group am-input-group-primary">
            <span class="am-input-group-label">职&emsp;&emsp;务</span>
            <input type="text" class="am-form-field whiteback" value="" />
        </div>
        <div class="am-input-group am-input-group-primary">
            <span class="am-input-group-label">直属上级</span>
            <select style="width: 100%;font-size: large;margin-top: 7px; border: solid 1px deepskyblue;">
                <option>张三</option>
                <option>李四</option>
                <option>王五</option>
            </select>
        </div>
        <div class="am-input-group am-input-group-primary am-margin-top">
            <span class="am-input-group-label">提&emsp;&emsp;交</span>
        </div>
    </div>
</div>
<%@include file="../../common/Footer.jsp"%>