package com.dianrong.common.uniauth.common.bean.dto;

import java.io.Serializable;

/**
 * Created by Arc on 7/4/2016.
 */
public class TagTypeDto implements Serializable {

    private Integer id;
    private String code;
    private Integer domainId;
    private String domainName;

    public Integer getId() {
        return id;
    }

    public TagTypeDto setId(Integer id) {
        this.id = id;
        return this;
    }

    public String getCode() {
        return code;
    }

    public TagTypeDto setCode(String code) {
        this.code = code;
        return this;
    }

    public Integer getDomainId() {
        return domainId;
    }

    public TagTypeDto setDomainId(Integer domainId) {
        this.domainId = domainId;
        return this;
    }

    public String getDomainName() {
        return domainName;
    }

    public TagTypeDto setDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
}
